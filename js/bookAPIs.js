const BASE_URL = "https://hmajax.itheima.net/api/books";
const creator = "老张";

/**
 * 封装API接口
 */

// 获取图书列表
function fetchBooks(params = {}) {
  return axios({
    url: BASE_URL,
    params: {
      creator,
      ...params,
    },
  });
}

// 新增图书
function addBook(data) {
  return axios({
    url: BASE_URL,
    method: "POST",
    data: {
      ...data,
      creator,
    },
  });
}

// 删除图书
function deleteBook(id) {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "DELETE",
  });
}

// 获取单本图书详情
function fetchBookById(id) {
  return axios({
    url: `${BASE_URL}/${id}`,
  });
}

// 更新图书信息
function updateBook(id, data) {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "PUT",
    data: {
      ...data,
      creator,
    },
  });
}

// 统一导出
export { fetchBooks, addBook, deleteBook, fetchBookById, updateBook };