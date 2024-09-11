import axios from "axios";

const API_URL = "http://localhost:5000/testResults";

// 테스트 결과 가져오기
export const getTestResults = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching test results:", error);
    throw error;
  }
};

// 테스트 결과 생성
export const createTestResult = async (resultData) => {
  try {
    const response = await axios.post(API_URL, resultData);
    return response.data;
  } catch (error) {
    console.error("Error creating test result:", error);
    throw error;
  }
};

// 테스트 결과 삭제
export const deleteTestResult = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return { message: "Test result deleted successfully" };
  } catch (error) {
    console.error("Error deleting test result:", error);
    throw error;
  }
};

// 테스트 결과 가시성 업데이트
export const updateTestResultVisibility = async (id, visibility) => {
  try {
    const response = await axios.patch(`${API_URL}/${id}`, { visibility });
    return response.data;
  } catch (error) {
    console.error("Error updating test result visibility:", error);
    throw error;
  }
};
