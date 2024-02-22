// this is for search section
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const cards = document.querySelectorAll(".card");
  const checkboxLabels = document.querySelectorAll(
    'input[type="checkbox"] + label'
  );

  searchInput.addEventListener("input", function () {
    const searchText = this.value.toLowerCase();

    cards.forEach((card) => {
      const title = card
        .querySelector(".card-tittle")
        .textContent.toLowerCase();
      const isTitleMatch = title.includes(searchText);

      const isLabelMatch = Array.from(checkboxLabels).some((label) => {
        return label.textContent.toLowerCase().includes(searchText);
      });

      if (isTitleMatch || isLabelMatch) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// this is for the filter section
document.addEventListener("DOMContentLoaded", function () {
  const computerScienceCheckbox = document.getElementById("computer-science");
  const computerScienceCourses = document.querySelectorAll(
    ".computer-science-course"
  );

  computerScienceCheckbox.addEventListener("change", function () {
    if (computerScienceCheckbox.checked) {
      // Show only Computer Science courses
      computerScienceCourses.forEach(function (course) {
        course.style.display = "flex";
      });
      // Hide other courses
      document
        .querySelectorAll(".course-card:not(.computer-science-course)")
        .forEach(function (course) {
          course.style.display = "none";
        });
    } else {
      // Show all courses
      document.querySelectorAll(".course-card").forEach(function (course) {
        course.style.display = "flex";
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const informationTechnologyCheckbox = document.getElementById(
    "information-technology"
  );
  const informationTechnologyCourses = document.querySelectorAll(
    ".information-technology-course"
  );

  informationTechnologyCheckbox.addEventListener("change", function () {
    if (informationTechnologyCheckbox.checked) {
      // Show only Information Technology courses
      informationTechnologyCourses.forEach(function (course) {
        course.style.display = "flex";
      });
      // Hide other courses
      document
        .querySelectorAll(".course-card:not(.information-technology-course)")
        .forEach(function (course) {
          course.style.display = "none";
        });
    } else {
      // Show all courses
      document.querySelectorAll(".course-card").forEach(function (course) {
        course.style.display = "flex";
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const beginnerCheckbox = document.getElementById("beginner");
  const beginnerCourses = document.querySelectorAll(".beginner-course");

  beginnerCheckbox.addEventListener("change", function () {
    if (beginnerCheckbox.checked) {
      // Show only beginner courses
      beginnerCourses.forEach(function (course) {
        course.style.display = "flex";
      });
      // Hide other courses
      document
        .querySelectorAll(".course-card:not(.beginner-course)")
        .forEach(function (course) {
          course.style.display = "none";
        });
    } else {
      // Show all courses
      document.querySelectorAll(".course-card").forEach(function (course) {
        course.style.display = "flex";
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const advanceCheckbox = document.getElementById("advanced");
  const advanceCourses = document.querySelectorAll(".advance-course");

  advanceCheckbox.addEventListener("change", function () {
    if (advanceCheckbox.checked) {
      // Show only advance courses
      advanceCourses.forEach(function (course) {
        course.style.display = "flex";
      });
      // Hide other courses
      document
        .querySelectorAll(".course-card:not(.advance-course)")
        .forEach(function (course) {
          course.style.display = "none";
        });
    } else {
      // Show all courses
      document.querySelectorAll(".course-card").forEach(function (course) {
        course.style.display = "flex";
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const webDevelopmentCheckbox = document.getElementById("web-development");
  const webDevelopmentCourses = document.querySelectorAll(
    ".web-development-course"
  );

  webDevelopmentCheckbox.addEventListener("change", function () {
    if (webDevelopmentCheckbox.checked) {
      // Show only Web Development courses
      webDevelopmentCourses.forEach(function (course) {
        course.style.display = "flex";
      });
      // Hide other courses
      document
        .querySelectorAll(".course-card:not(.web-development-course)")
        .forEach(function (course) {
          course.style.display = "none";
        });
    } else {
      // Show all courses
      document.querySelectorAll(".course-card").forEach(function (course) {
        course.style.display = "flex";
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const computerProgrammingCheckbox = document.getElementById(
    "computer-programing"
  );
  const computerProgrammingCourses = document.querySelectorAll(
    ".computer-programming-course"
  );

  computerProgrammingCheckbox.addEventListener("change", function () {
    if (computerProgrammingCheckbox.checked) {
      // Show only computer-programming
      computerProgrammingCourses.forEach(function (course) {
        course.style.display = "flex";
      });
      // Hide other courses
      document
        .querySelectorAll(".course-card:not(.computer-programming-course)")
        .forEach(function (course) {
          course.style.display = "none";
        });
    } else {
      // Show all courses
      document.querySelectorAll(".course-card").forEach(function (course) {
        course.style.display = "flex";
      });
    }
  });
});
