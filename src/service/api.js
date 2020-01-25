import mockData from "../data/MOCK_DATA";

export function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockData), 3000)
  });
}
