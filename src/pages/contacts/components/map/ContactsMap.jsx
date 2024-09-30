import styles from './contacts_map.module.css';

const ContactsMap = () => {

	return (
		<iframe 
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.80062903098!2d76.94054937653864!3d43.255600078055124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836e95db9d5077%3A0x826ad73ab97f6e5!2z0JrQsNC30LDRhdGB0YLQsNC90YHQutC-LdCR0YDQuNGC0LDQvdGB0LrQuNC5INCi0LXRhdC90LjRh9C10YHQutC40Lkg0KPQvdC40LLQtdGA0YHQuNGC0LXRgiwg0YPQu9C40YbQsCDQotC-0LvQtSDQkdC4IDU5LCDQkNC70LzQsNGC0YsgMDUwMDAw!5e0!3m2!1sru!2skz!4v1717426818025!5m2!1sru!2skz" 
			allowFullScreen="" 
			loading="lazy" 
			referrerPolicy="no-referrer-when-downgrade"
			className={styles.map}
		/>
	);
};

export default ContactsMap;