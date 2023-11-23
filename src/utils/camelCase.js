const camelCase = str => str?.toLowerCase?.().replace?.(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr?.toUpperCase?.());

export default camelCase;
