// 랜덤 고양이 이미지 가져오기 - Fetch API 사용
// ex05-12.ts 복사

import { type Cat } from "./types.js";
import { appendImages } from "./utils.js";

const url = "https://api.thecatapi.com/v1/images/search";

const btn = document.querySelector("button");

btn?.addEventListener("click", getImages);

async function getImages() {
  try {
    const response = await fetch(url);
    console.log(response);
    if (response.ok) {
      const data: Cat[] = await response.json();
      appendImages(data);
    } else {
      console.log(response.status, "에러 발생"); //  status: 서버로 부터 받은 응답의 상태를 나타내는 HTTP 상태코드 (200,404,500 등)
    }
  } catch (err) {
    console.log("에러 발생", err);
  }
}
