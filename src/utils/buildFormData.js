const buildFormData = data => {
  const formData = new FormData();
  Object.keys(data).forEach(key => {
    if (typeof data[key] === 'object' && !(data[key] instanceof File)) {
      formData.append(key, JSON.stringify(data[key]));
    } else {
      formData.append(key, data[key]);
    }
  });
  return formData;
};

export default buildFormData;
