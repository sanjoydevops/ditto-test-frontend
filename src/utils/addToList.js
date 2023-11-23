const addToList = (action, state, name, list, taskAction) => {
  const itemToAdd = { ...action?.payload?.[name] };
  if (Array.isArray(state?.list?.[name]?.[list]?.data)) {
    const paginatedData = { ...state?.list?.[name]?.[list] };
    const currentList = [...paginatedData?.data || []];
    const isExist = currentList?.some?.(item => item?.id === itemToAdd?.id);
    const nextList = [
      ...(isExist ? [] : ('unshift' === taskAction ? [itemToAdd] : [])),
      ...currentList,
      ...(isExist ? [] : (['push', undefined].includes(taskAction) ? [itemToAdd] : [])),
    ];
    return { ...paginatedData, data: nextList };
  }
  const data = [...state?.list?.[name]?.[list] || []];
  const isExist = data?.some?.(item => item?.id === itemToAdd?.id);
  return [
    ...(isExist ? [] : ('unshift' === taskAction ? [itemToAdd] : [])),
    ...data,
    ...(isExist ? [] : (['push', undefined].includes(taskAction) ? [itemToAdd] : [])),
  ];
}

export default addToList;
