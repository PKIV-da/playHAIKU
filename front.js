const comments = [
      "いい句じゃ",
      "傑作じゃ。ばあさんにも見てもらおう",
      "情景が目の前に浮かんでくるわい",
    ];

    function openModal() {
      const randomIndex = Math.floor(Math.random() * comments.length);
      document.getElementById("commentText").innerText = comments[randomIndex];
      document.getElementById("modal").style.display = "block";
    }

    function closeModal() {
      document.getElementById("modal").style.display = "none";
    }