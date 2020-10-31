import axios from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:5000/',
})

export const insertImage = payload => api.post(`/images`, payload);
export const getAllImages = () => api.get(`/images`);
export const updateImageById = (id, payload) => api.put(`/images/${id}`, payload);
export const deleteImageById = id => api.delete(`/images/${id}`);
export const getImageById = id => api.get(`/images/${id}`);

export const insertAuthor = payload => api.post(`/authors`, payload);
export const getAllAuthors = () => api.get(`/authors`);
export const updateAuthorById = (id, payload) => api.put(`/authors/${id}`, payload);
export const deleteAuthorById = id => api.delete(`/authors/${id}`);
export const getAuthorById = id => api.get(`/authors/${id}`);

export const insertLearningPath = payload => api.post(`/learningPaths`, payload);
export const getAllLearningPaths = () => api.get(`/learningPaths`);
export const updateLearningPathById = (id, payload) => api.put(`/learningPaths/${id}`, payload);
export const deleteLearningPathById = id => api.delete(`/learningPaths/${id}`);
export const getLearningPathById = id => api.get(`/learningPaths/${id}`);

export const insertCategory = payload => api.post(`/categories`, payload);
export const getAllCategories = () => api.get(`/categories`);
export const updateCategoryById = (id, payload) => api.put(`/categories/${id}`, payload);
export const deleteCategoryById = id => api.delete(`/categories/${id}`);
export const getCategoryById = id => api.get(`/categories/${id}`);

export const insertBlog = payload => api.post(`/blogs`, payload);
export const getAllBlogs = () => api.get(`/blogs`);
export const updateBlogById = (id, payload) => api.put(`/blogs/${id}`, payload);
export const deleteBlogById = id => api.delete(`/blogs/${id}`);
export const getBlogById = id => api.get(`/blogs/${id}`);

export const insertModule = payload => api.post(`/modules`, payload);
export const getAllModules = () => api.get(`/modules`);
export const updateModuleById = (id, payload) => api.put(`/modules/${id}`, payload);
export const deleteModuleById = id => api.delete(`/modules/${id}`);
export const getModuleById = id => api.get(`/modules/${id}`);

const apis = {
	insertImage,
	getAllImages,
	getImageById,
	deleteImageById,
	updateImageById,
	
	insertAuthor,
	getAllAuthors,
	getAuthorById,
	deleteAuthorById,
	updateAuthorById,
	
	insertLearningPath,
	getAllLearningPaths,
	getLearningPathById,
	deleteLearningPathById,
	updateLearningPathById,
	
	insertCategory,
	getAllCategories,
	getCategoryById,
	deleteCategoryById,
	updateCategoryById,
	
	insertBlog,
	getAllBlogs,
	getBlogById,
	deleteBlogById,
	updateBlogById,

	insertModule,
	getAllModules,
	getModuleById,
	deleteModuleById,
	updateModuleById,
}

export default apis;