// Dữ liệu khách sạn
const hotelData = [
  // Đà Nẵng
  {
    name: "First House Hotel",
    city: "Đà Nẵng",
    rating: "8.5/10",
    reviews: 2906,
    oldPrice: "508,538 VND",
    newPrice: "317,221 VND",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
    badge: "family",
  },
  {
    name: "Brilliant Hotel Đà Nẵng",
    city: "Đà Nẵng",
    rating: "8.8/10",
    reviews: 1523,
    oldPrice: "650,000 VND",
    newPrice: "480,000 VND",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400",
    badge: "star",
  },
  {
    name: "Sanouva Hotel Đà Nẵng",
    city: "Đà Nẵng",
    rating: "8.7/10",
    reviews: 1845,
    oldPrice: "720,000 VND",
    newPrice: "550,000 VND",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400",
    badge: "family",
  },
  {
    name: "Naman Retreat Đà Nẵng",
    city: "Đà Nẵng",
    rating: "9.2/10",
    reviews: 2341,
    oldPrice: "2,500,000 VND",
    newPrice: "1,850,000 VND",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400",
    badge: "star",
  },

  // Nha Trang
  {
    name: "Vinpearl Resort Nha Trang",
    city: "Nha Trang",
    rating: "9.0/10",
    reviews: 1523,
    oldPrice: "1,200,000 VND",
    newPrice: "850,000 VND",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400",
    badge: "star",
  },
  {
    name: "Sheraton Nha Trang",
    city: "Nha Trang",
    rating: "8.9/10",
    reviews: 2156,
    oldPrice: "1,800,000 VND",
    newPrice: "1,350,000 VND",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
    badge: "star",
  },
  {
    name: "Havana Hotel Nha Trang",
    city: "Nha Trang",
    rating: "8.6/10",
    reviews: 987,
    oldPrice: "580,000 VND",
    newPrice: "420,000 VND",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400",
    badge: "family",
  },
  {
    name: "Liberty Central Nha Trang",
    city: "Nha Trang",
    rating: "8.8/10",
    reviews: 1654,
    oldPrice: "890,000 VND",
    newPrice: "650,000 VND",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400",
    badge: "family",
  },

  // TP.HCM
  {
    name: "Hotel Continental Sài Gòn",
    city: "TP.HCM",
    rating: "8.8/10",
    reviews: 2341,
    oldPrice: "650,000 VND",
    newPrice: "480,000 VND",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400",
    badge: "family",
  },
  {
    name: "Renaissance Riverside Saigon",
    city: "TP.HCM",
    rating: "9.1/10",
    reviews: 3245,
    oldPrice: "1,950,000 VND",
    newPrice: "1,450,000 VND",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
    badge: "star",
  },
  {
    name: "Liberty Central Saigon",
    city: "TP.HCM",
    rating: "8.7/10",
    reviews: 1876,
    oldPrice: "780,000 VND",
    newPrice: "590,000 VND",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400",
    badge: "family",
  },
  {
    name: "Pullman Saigon Centre",
    city: "TP.HCM",
    rating: "9.0/10",
    reviews: 2654,
    oldPrice: "1,650,000 VND",
    newPrice: "1,250,000 VND",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400",
    badge: "star",
  },

  // Đà Lạt
  {
    name: "Ana Mandara Dalat Resort",
    city: "Đà Lạt",
    rating: "9.1/10",
    reviews: 1678,
    oldPrice: "1,100,000 VND",
    newPrice: "780,000 VND",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
    badge: "star",
  },
  {
    name: "Dalat Palace Heritage Hotel",
    city: "Đà Lạt",
    rating: "9.3/10",
    reviews: 2134,
    oldPrice: "2,200,000 VND",
    newPrice: "1,680,000 VND",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400",
    badge: "star",
  },
  {
    name: "Terracotta Hotel Dalat",
    city: "Đà Lạt",
    rating: "8.7/10",
    reviews: 945,
    oldPrice: "650,000 VND",
    newPrice: "480,000 VND",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400",
    badge: "family",
  },
  {
    name: "Swiss Belresort Tuyen Lam",
    city: "Đà Lạt",
    rating: "8.9/10",
    reviews: 1456,
    oldPrice: "980,000 VND",
    newPrice: "720,000 VND",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400",
    badge: "family",
  },

  // Vũng Tàu
  {
    name: "Imperial Hotel Vũng Tàu",
    city: "Vũng Tàu",
    rating: "8.3/10",
    reviews: 945,
    oldPrice: "550,000 VND",
    newPrice: "420,000 VND",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400",
    badge: "family",
  },
  {
    name: "The Grand Ho Tram Resort",
    city: "Vũng Tàu",
    rating: "9.0/10",
    reviews: 1876,
    oldPrice: "1,800,000 VND",
    newPrice: "1,350,000 VND",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
    badge: "star",
  },
  {
    name: "Palace Hotel Vung Tau",
    city: "Vũng Tàu",
    rating: "8.6/10",
    reviews: 1234,
    oldPrice: "680,000 VND",
    newPrice: "520,000 VND",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400",
    badge: "family",
  },
  {
    name: "Malibu Hotel Vung Tau",
    city: "Vũng Tàu",
    rating: "8.5/10",
    reviews: 876,
    oldPrice: "590,000 VND",
    newPrice: "450,000 VND",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400",
    badge: "family",
  },

  // Hà Nội
  {
    name: "Sofitel Legend Metropole Hanoi",
    city: "Hà Nội",
    rating: "9.4/10",
    reviews: 3456,
    oldPrice: "2,200,000 VND",
    newPrice: "1,650,000 VND",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400",
    badge: "star",
  },
  {
    name: "Hilton Hanoi Opera",
    city: "Hà Nội",
    rating: "9.1/10",
    reviews: 2765,
    oldPrice: "1,850,000 VND",
    newPrice: "1,380,000 VND",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
    badge: "star",
  },
  {
    name: "La Siesta Premium Hanoi",
    city: "Hà Nội",
    rating: "8.9/10",
    reviews: 1543,
    oldPrice: "780,000 VND",
    newPrice: "590,000 VND",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400",
    badge: "family",
  },
  {
    name: "Hanoi Elegance Hotel",
    city: "Hà Nội",
    rating: "8.7/10",
    reviews: 1287,
    oldPrice: "650,000 VND",
    newPrice: "480,000 VND",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400",
    badge: "family",
  },
];

// Tính ngày trả phòng
function calculateCheckout() {
  const checkinInput = document.getElementById("checkin");
  const nightsInput = document.getElementById("nights");
  const checkoutDisplay = document.getElementById("checkout");

  if (checkinInput.value && nightsInput.value) {
    const checkinDate = new Date(checkinInput.value);
    const nights = parseInt(nightsInput.value);
    const checkoutDate = new Date(checkinDate);
    checkoutDate.setDate(checkoutDate.getDate() + nights);

    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    checkoutDisplay.textContent = checkoutDate.toLocaleDateString(
      "vi-VN",
      options
    );
  }
}

// Xử lý tìm kiếm
function handleSearch(e) {
  e.preventDefault();

  const destination = document
    .getElementById("destination")
    .value.toLowerCase();
  const checkin = document.getElementById("checkin").value;
  const nights = document.getElementById("nights").value;
  const guests = document.getElementById("guests").value;

  if (!destination || !checkin) {
    alert("Vui lòng nhập điểm đến và ngày nhận phòng!");
    return;
  }

  const results = hotelData.filter(
    (hotel) =>
      hotel.city.toLowerCase().includes(destination) ||
      hotel.name.toLowerCase().includes(destination)
  );

  displayResults(results, destination, checkin, nights, guests);
}

// Hiển thị kết quả tìm kiếm
function displayResults(results, destination, checkin, nights, guests) {
  const resultsContainer = document.getElementById("searchResults");

  if (results.length === 0) {
    resultsContainer.innerHTML = `
      <div class="no-results">
        <h3>Không tìm thấy khách sạn</h3>
        <p>Không tìm thấy khách sạn phù hợp với "${destination}". Vui lòng thử tìm kiếm khác.</p>
      </div>
    `;
    return;
  }

  const checkinDate = new Date(checkin);
  const checkoutDate = new Date(checkinDate);
  checkoutDate.setDate(checkoutDate.getDate() + parseInt(nights));

  const checkinFormatted = checkinDate.toLocaleDateString("vi-VN");
  const checkoutFormatted = checkoutDate.toLocaleDateString("vi-VN");

  let html = `
    <h3>Tìm thấy ${results.length} khách sạn tại "${destination}"</h3>
    <p style="color: #666; margin-bottom: 20px;">
      ${checkinFormatted} - ${checkoutFormatted} | ${nights} đêm | ${guests}
    </p>
  `;

  results.forEach((hotel) => {
    html += `
      <div class="result-item">
        <h4>${hotel.name}</h4>
        <p>📍 ${hotel.city}</p>
        <p>⭐ Đánh giá: ${hotel.rating} (${hotel.reviews} đánh giá)</p>
        <p class="price">
          ${
            hotel.oldPrice
              ? `<span style="text-decoration: line-through; color: #999;">${hotel.oldPrice}</span> `
              : ""
          }
          ${hotel.newPrice}
        </p>
      </div>
    `;
  });

  resultsContainer.innerHTML = html;
  resultsContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// Hiển thị thông báo
function showNotification(message) {
  const notification = document.createElement("div");
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #10b981;
    color: white;
    padding: 15px 25px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    z-index: 10000;
    font-weight: 500;
    animation: slideIn 0.3s ease;
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease";
    setTimeout(() => {
      if (notification.parentNode) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Tải khách sạn theo thành phố
function loadHotelsByCity(cityName) {
  const hotelCardsContainer = document.querySelector("#hotelCardsContainer");

  if (!hotelCardsContainer) return;

  const cityHotels = hotelData.filter((hotel) => hotel.city === cityName);

  if (cityHotels.length === 0) {
    hotelCardsContainer.innerHTML =
      '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #6b7280;">' +
      "<p>Đang cập nhật khách sạn tại " +
      cityName +
      "...</p></div>";
    return;
  }

  let html = "";
  cityHotels.forEach((hotel) => {
    const badgeClass = hotel.badge === "star" ? "star" : "family";
    const badgeText =
      hotel.badge === "star" ? "4-5 sao đánh giá tốt" : "Cho gia đình";

    html += `
      <div class="hotel-card">
        <img src="${hotel.image}" alt="${hotel.name}">
        <div class="hotel-badge ${badgeClass}">${badgeText}</div>
        <div class="hotel-info">
          <h4>${hotel.name}</h4>
          <div class="rating">${hotel.rating}(${hotel.reviews})</div>
          <div class="price">
            ${
              hotel.oldPrice
                ? `<span class="old-price">${hotel.oldPrice}</span>`
                : ""
            }
            <span class="new-price">${hotel.newPrice}</span>
          </div>
          <p>Chưa bao gồm thuế và phí</p>
        </div>
      </div>
    `;
  });

  hotelCardsContainer.innerHTML = html;
  showNotification(
    "Đã tải " + cityHotels.length + " khách sạn tại " + cityName
  );
}

// Khởi tạo
document.addEventListener("DOMContentLoaded", () => {
  // Thêm CSS animation
  const style = document.createElement("style");
  style.textContent = `
    @keyframes slideIn {
      from {
        transform: translateX(400px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes slideOut {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(400px);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // Set ngày mặc định
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const checkinInput = document.getElementById("checkin");
  if (checkinInput) {
    checkinInput.value = tomorrow.toISOString().split("T")[0];
    checkinInput.min = today.toISOString().split("T")[0];
  }

  calculateCheckout();

  // Event listeners
  if (checkinInput) {
    checkinInput.addEventListener("change", calculateCheckout);
  }

  const nightsInput = document.getElementById("nights");
  if (nightsInput) {
    nightsInput.addEventListener("change", calculateCheckout);
  }

  const searchForm = document.getElementById("searchForm");
  if (searchForm) {
    searchForm.addEventListener("submit", handleSearch);
  }

  // Discount tabs
  const discountTabs = document.querySelectorAll(".discount-section .tab");
  discountTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      discountTabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Copy buttons
  const copyButtons = document.querySelectorAll(".copy-btn");
  copyButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const code = this.getAttribute("data-code");

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(code)
          .then(() => {
            const originalText = button.textContent;
            button.textContent = "✓ Đã sao chép!";
            button.style.background = "#10b981";

            showNotification("Đã sao chép mã: " + code);

            setTimeout(() => {
              button.textContent = originalText;
              button.style.background = "#3c538c";
            }, 2000);
          })
          .catch((err) => {
            console.error("Không thể sao chép:", err);
            alert("Mã giảm giá: " + code);
          });
      } else {
        alert("Mã giảm giá: " + code);
      }
    });
  });

  // City tabs
  const cityTabs = document.querySelectorAll(".city-tab");
  cityTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      cityTabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      const cityName = this.getAttribute("data-city");
      loadHotelsByCity(cityName);
    });
  });

  // Tải khách sạn mặc định
  loadHotelsByCity("Đà Nẵng");
});

// Slider functionality
let currentSlide = 0;
const sliderBtnNext = document.querySelector(".slider-btn.next");
const sliderBtnPrev = document.querySelector(".slider-btn.prev");

if (sliderBtnNext) {
  sliderBtnNext.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % 2;
    console.log("Current slide:", currentSlide);
  });
}

if (sliderBtnPrev) {
  sliderBtnPrev.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + 2) % 2;
    console.log("Current slide:", currentSlide);
  });
}
