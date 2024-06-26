import containerTypes from "@common/utils/containerTypes";
import mergeObjects from "@common/utils/mergeObjects";

const Container = ({
	id = '',
	type = 'div',
	maxWidth = 'none', 
	className = '',
	style = {},
	children, 
}) => {

	// WARN: what is prioritized? class or style?
	const configStyle = {
		maxWidth: maxWidth,
	};

	const ContainerElement = containerTypes[type] || <div />;

	return (
		<ContainerElement id={id} className={className} style={mergeObjects(style, configStyle) }>
			{children}
		</ContainerElement>
	);
};

export default Container;