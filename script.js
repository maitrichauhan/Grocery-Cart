let totalAmount = 0;
      let itemCounts = {
        banana: 0,
        apple: 0,
        orange: 0,
        carrot: 0,
        potato: 0,
        corn: 0,
      };

      function addItem(item, price) {
        totalAmount += price;
        itemCounts[item]++;
        document.getElementById("totalAmount").innerText = totalAmount;
        document.getElementById(item + "Count").innerText = itemCounts[item];
      }

      function removeItem(item, price) {
        if (totalAmount >= price && itemCounts[item] > 0) {
          totalAmount -= price;
          itemCounts[item]--;
          document.getElementById("totalAmount").innerText = totalAmount;
          document.getElementById(item + "Count").innerText = itemCounts[item];
        }
      }

      function placeOrder() {
        alert("Order placed successfully!");
      }

      function clearCart() {
        totalAmount = 0;
        for (let item in itemCounts) {
          itemCounts[item] = 0;
          document.getElementById(item + "Count").innerText = 0;
        }
        document.getElementById("totalAmount").innerText = totalAmount;
      }

      function showSection(section) {
        document.getElementById("fruits").classList.add("hidden");
        document.getElementById("vegetables").classList.add("hidden");
        document.getElementById(section).classList.remove("hidden");
        document.getElementById("fruitsTab").classList.remove("active");
        document.getElementById("vegetablesTab").classList.remove("active");
        document.getElementById(section + "Tab").classList.add("active");
      }

      function handleSearch(event) {
        if (event.key === "Enter") {
          const query = event.target.value.toLowerCase();
          const items = document.querySelectorAll(".item");
          let foundInFruits = false;
          let foundInVegetables = false;

          items.forEach((item) => {
            const itemName = item.querySelector("h2").innerText.toLowerCase();
            if (itemName.includes(query)) {
              item.style.display = "inline-block";
              if (item.closest("#fruits")) {
                foundInFruits = true;
              } else if (item.closest("#vegetables")) {
                foundInVegetables = true;
              }
            } else {
              item.style.display = "none";
            }
          });

          if (foundInFruits) {
            showSection('fruits');
          } else if (foundInVegetables) {
            showSection('vegetables');
          }
        }
      }