document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const getStartedBtn = document.getElementById("getStarted");
  const faqBoxes = document.querySelectorAll(".faqbox");
  const toast = document.getElementById("toast");

  /* =======================
     TOAST FUNCTION
  ======================== */
  function showToast(message, type = "success") {
    toast.textContent = message;
    toast.className = "";
    toast.classList.add("show", type);

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }

  /* =======================
     GET STARTED BUTTON
     (Spinner + Validation)
  ======================== */
  getStartedBtn.addEventListener("click", () => {
    const emailValue = emailInput.value.trim();

    // Show loading spinner
    getStartedBtn.classList.add("loading");

    setTimeout(() => {
      if (emailValue === "") {
        showToast("Please enter your email address", "error");
        getStartedBtn.classList.remove("loading");
        return;
      }

      if (!emailValue.includes("@")) {
        showToast("Please enter a valid email address", "error");
        getStartedBtn.classList.remove("loading");
        return;
      }

      showToast("Success! Email submitted 🎉", "success");
      emailInput.value = "";
      getStartedBtn.classList.remove("loading");
    }, 1500);
  });

  /* =======================
     FAQ ACCORDION
     (Auto-close others)
  ======================== */
  faqBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      faqBoxes.forEach((item) => {
        if (item !== box) item.classList.remove("active");
      });
      box.classList.toggle("active");
    });
  });
});
