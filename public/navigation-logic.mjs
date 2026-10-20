export const MAX_VISIBLE_SUBCATEGORIES = 5;

export function toggleCategory(current, clickedCategory) {
  if (clickedCategory === '全部分类') {
    return { category: clickedCategory, expandedCategory: '', subcategory: '', expandedSubcategoryCategory: '' };
  }
  const isOpen = current.category === clickedCategory && current.expandedCategory === clickedCategory;
  return {
    category: clickedCategory,
    expandedCategory: isOpen ? '' : clickedCategory,
    subcategory: current.category === clickedCategory ? current.subcategory : '',
    expandedSubcategoryCategory: ''
  };
}

export function subcategoryView(subcategories, selectedId, showAll, limit = MAX_VISIBLE_SUBCATEGORIES) {
  const available = (subcategories || []).filter(item => item.count > 0);
  if (showAll || available.length <= limit) {
    return { items: available, hiddenCount: 0, canToggle: available.length > limit };
  }
  let items = available.slice(0, limit);
  const selected = available.find(item => item.id === selectedId);
  if (selected && !items.some(item => item.id === selected.id)) items = [...items.slice(0, limit - 1), selected];
  return { items, hiddenCount: available.length - items.length, canToggle: true };
}
