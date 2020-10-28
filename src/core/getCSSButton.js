export default function getCSSClass(isRight, isChecked) {
  let className = "li-btn";
  if (isRight) className += " success";
  else className += " error";

  if (isChecked) className += " checked";

  return className;
}
