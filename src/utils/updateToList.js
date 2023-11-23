const updateToList = (action, state, name, list, taskAction) => {
  const itemToUpdate = { ...action?.payload?.[name] };
  if (Array.isArray(state?.list?.[name]?.[list]?.data)) {
    const paginatedData = { ...state?.list?.[name]?.[list] };
    const currentData = [...paginatedData?.data || []];
    const index = currentData?.findIndex?.(item => item?.id === itemToUpdate?.id);
    const isExist = index >= 0;
    const nextData = [
      ...(!isExist ? ('unshift' === taskAction ? [itemToUpdate] : []) : []),
      ...(isExist ? [...currentData?.slice?.(0, index), itemToUpdate, ...currentData?.slice?.(index + 1)] : [...currentData]),
      ...(!isExist ? (['push', undefined].includes(taskAction) ? [itemToUpdate] : []) : []),
    ];
    return { ...paginatedData, data: nextData };
  }
  const data = [...state?.list?.[name]?.[list] || []];
  const index = data?.findIndex?.(item => item?.id === itemToUpdate?.id);
  const isExist = index >= 0;
  return [
    ...(!isExist ? ('unshift' === taskAction ? [itemToUpdate] : []) : []),
    ...(isExist ? [...data?.slice?.(0, index), itemToUpdate, ...data?.slice?.(index + 1)] : [...data]),
    ...(!isExist ? (['push', undefined].includes(taskAction) ? [itemToUpdate] : []) : []),
  ];
}

export default updateToList;
