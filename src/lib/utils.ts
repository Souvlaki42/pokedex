export const capitalizeFirstLetter = (value: string) => {
	return value.charAt(0).toUpperCase() + value.slice(1);
};

export const jsonParse = <T = unknown>(value: string) => {
	return JSON.parse(value) as T;
};
