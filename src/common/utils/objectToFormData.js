function objectToFormData(obj, form = new FormData(), namespace = '') {
    for (let property in obj) {
      if (obj.hasOwnProperty(property)) {
        const formKey = namespace ? `${namespace}.${property}` : property;
        if (obj[property] instanceof Array) { // It is Array
          obj[property].forEach((element, index) => { // Iterate Array
            if (element instanceof Object && !(element instanceof File)) { // It is Object (in Array)
              if(!property.includes('File')) { // Property To Filter Objects, Given From Backend Except Saved Files
                objectToFormData(element, form, `${formKey}[${index}]`);
              }
              // objectToFormData(element, form, `${formKey}[${index}]`);
            } else {
              form.append(`${formKey}`, element); // It is Text or File
            }
          });
        }
        else if (obj[property] instanceof Object && !(obj[property] instanceof File)) { // It is Object
          objectToFormData(obj[property], form, formKey);
        } else {
          form.append(formKey, obj[property]); // It is Text or File
        }
      }
    }
    return form;
  }

  export default objectToFormData;