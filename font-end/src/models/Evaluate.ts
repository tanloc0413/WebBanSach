export const getEvaluateOfTheBook = async (bookId: number) => {
    // Gọi API để lấy danh sách đánh giá của sách
    const response = await fetch(`/api/books/${bookId}/evaluates`);
    if (!response.ok) {
      throw new Error('Failed to fetch evaluates');
    }
    return response.json();
};
  
export const deleteEvaluate = async (evaluateId: number) => {
    // Gọi API để xóa đánh giá
    const response = await fetch(`/api/evaluates/${evaluateId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete evaluate');
    }
};