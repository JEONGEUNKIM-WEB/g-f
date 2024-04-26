let num = 0;
      setInterval(slider, 10000);
      slider();
      function slider() {
        let imgList = document.querySelectorAll(".mainSliderImg"); //모든이미지
        for (let i = 0; i < imgList.length; i++) {
          imgList[i].style.display = "none";
        }
        num++;
        // num가 imgList.length 보다 크면 다시 1의 값으로 돌아감
        if (num > imgList.length) {
          num = 1;
        }
        // num 에 1을 빼서 0으로 만듬
        imgList[num - 1].style.display = "block";
      };

    