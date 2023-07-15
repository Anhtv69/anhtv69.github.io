"use strict";
const instruct = document.querySelector(".instruct");
const email = document.querySelector(".email");
const submit = document.querySelector(".submit");
const info = document.querySelector(".info");

const sub1 = document.querySelector(".submit-1");
const sub2 = document.querySelector(".submit-2");
const sub3 = document.querySelector(".submit-3");
const sub4 = document.querySelector(".submit-4");
const sub5 = document.querySelector(".submit-5");
const sub6 = document.querySelector(".submit-6");

const subless1 = document.querySelector(".submit-less-1");
const subless2 = document.querySelector(".submit-less-2");
const subless3 = document.querySelector(".submit-less-3");
const subless4 = document.querySelector(".submit-less-4");
const subless5 = document.querySelector(".submit-less-5");
const subless6 = document.querySelector(".submit-less-6");

const info1 = document.querySelector(".info-1");
const info2 = document.querySelector(".info-2");
const info3 = document.querySelector(".info-3");
const info4 = document.querySelector(".info-4");
const info5 = document.querySelector(".info-5");
const info6 = document.querySelector(".info-6");

/////////////

submit.addEventListener("click", function () {
  if (email.checkValidity()) {
    info.classList.remove("visually-hidden");

    email.classList.add("visually-hidden");
    submit.classList.add("visually-hidden");
    instruct.classList.add("visually-hidden");
  } else {
    alert("Vui lòng nhập địa chỉ email hợp lệ!");
  }
});

sub1.addEventListener("click", function () {
  info1.classList.remove("visually-hidden");
  sub1.classList.add("visually-hidden");
  subless1.classList.remove("visually-hidden");
});
subless1.addEventListener("click", function () {
  info1.classList.add("visually-hidden");
  sub1.classList.remove("visually-hidden");
  subless1.classList.add("visually-hidden");
});

sub2.addEventListener("click", function () {
  info2.classList.remove("visually-hidden");
  sub2.classList.add("visually-hidden");
  subless2.classList.remove("visually-hidden");
});
subless2.addEventListener("click", function () {
  info2.classList.add("visually-hidden");
  sub2.classList.remove("visually-hidden");
  subless2.classList.add("visually-hidden");
});

sub3.addEventListener("click", function () {
  info3.classList.remove("visually-hidden");
  sub3.classList.add("visually-hidden");
  subless3.classList.remove("visually-hidden");
});
subless3.addEventListener("click", function () {
  info3.classList.add("visually-hidden");
  sub3.classList.remove("visually-hidden");
  subless3.classList.add("visually-hidden");
});

sub4.addEventListener("click", function () {
  info4.classList.remove("visually-hidden");
  sub4.classList.add("visually-hidden");
  subless4.classList.remove("visually-hidden");
});
subless4.addEventListener("click", function () {
  info4.classList.add("visually-hidden");
  sub4.classList.remove("visually-hidden");
  subless4.classList.add("visually-hidden");
});

sub5.addEventListener("click", function () {
  info5.classList.remove("visually-hidden");
  sub5.classList.add("visually-hidden");
  subless5.classList.remove("visually-hidden");
});
subless5.addEventListener("click", function () {
  info5.classList.add("visually-hidden");
  sub5.classList.remove("visually-hidden");
  subless5.classList.add("visually-hidden");
});

sub6.addEventListener("click", function () {
  info6.classList.remove("visually-hidden");
  sub6.classList.add("visually-hidden");
  subless6.classList.remove("visually-hidden");
});
subless6.addEventListener("click", function () {
  info6.classList.add("visually-hidden");
  sub6.classList.remove("visually-hidden");
  subless6.classList.add("visually-hidden");
});
