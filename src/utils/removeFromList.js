const removeFromList = (action, state, name, list) => {
  const itemToRemove = { ...action?.payload?.[name] };
  if (Array.isArray(state?.list?.[name]?.[list]?.data)) {
    const paginatedData = { ...state?.list?.[name]?.[list] };
    const currentList = [...paginatedData?.data || []];
    const index = currentList?.findIndex?.(item => item?.id === itemToRemove?.id);
    const nextList = [...currentList?.slice?.(0, index), ...currentList?.slice?.(index + 1)];
    return { ...paginatedData, data: nextList };
  }
  const data = [...state?.list?.[name]?.[list] || []];
  const index = data?.findIndex?.(item => item?.id === itemToRemove?.id);
  return [...data?.slice?.(0, index), ...data?.slice?.(index + 1)];
}

export default removeFromList;
