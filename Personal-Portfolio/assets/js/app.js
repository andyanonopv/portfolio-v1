document.addEventListener('DOMContentLoaded',function() {
    const data = {
        "items": [
            {
              "imgPath": "./assets/img/img-1.avif",
              "title": "Project 1",
              "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
              "imgPath": "./assets/img/img-2.avif",
              "title": "Project 2",
              "paragraph": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              "imgPath": "./assets/img/img-3.avif",
              "title": "Project 3",
              "paragraph": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
                "imgPath": "./assets/img/img-4.avif",
                "title": "Project 4",
                "paragraph": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            //Clutter
            {
                "imgPath": "./assets/img/img-1.avif",
                "title": "Project 1",
                "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              },
              {
                "imgPath": "./assets/img/img-2.avif",
                "title": "Project 2",
                "paragraph": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              },
              {
                "imgPath": "./assets/img/img-3.avif",
                "title": "Project 3",
                "paragraph": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              },
              {
                  "imgPath": "./assets/img/img-4.avif",
                  "title": "Project 4",
                  "paragraph": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              },
              {
                "imgPath": "./assets/img/img-1.avif",
                "title": "Project 1",
                "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              },
              {
                "imgPath": "./assets/img/img-2.avif",
                "title": "Project 2",
                "paragraph": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              },
              {
                "imgPath": "./assets/img/img-3.avif",
                "title": "Project 3",
                "paragraph": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              },
              {
                  "imgPath": "./assets/img/img-4.avif",
                  "title": "Project 4",
                  "paragraph": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              },
              {
                "imgPath": "./assets/img/img-1.avif",
                "title": "Project 1",
                "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              },
              {
                "imgPath": "./assets/img/img-2.avif",
                "title": "Project 2",
                "paragraph": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              },
              {
                "imgPath": "./assets/img/img-3.avif",
                "title": "Project 3",
                "paragraph": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              },
              {
                  "imgPath": "./assets/img/img-4.avif",
                  "title": "Project 4",
                  "paragraph": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
          ]
    }
    
    const gridItems = document.querySelectorAll(".grid-item");
    const h1Elements = document.querySelectorAll('.flex-circle h1');

    function hireMe() {
        const hireButton = document.querySelector('.resumeBtn');

        hireButton.addEventListener('click', function () {
            // Replace the file path with the actual path to your hire_me.txt file
            const filePath = "./assets/resume/hire_me.txt";
    
            // Fetch the content of the file
            fetch(filePath)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Failed to fetch file: ${filePath}`);
                    }
                    return response.text();
                })
                .then(fileContent => {
                    // Create a Blob with the content
                    const blob = new Blob([fileContent], { type: 'text/plain' });
    
                    // Create a link element
                    const link = document.createElement('a');
    
                    // Set the href attribute to the object URL of the Blob
                    link.href = URL.createObjectURL(blob);
    
                    // Set the download attribute with the desired file name
                    link.download = 'hire_me.txt';
    
                    // Append the link to the document
                    document.body.appendChild(link);
    
                    // Trigger a click on the link to start the download
                    link.click();
    
                    // Remove the link from the document
                    document.body.removeChild(link);
                })
                .catch(error => console.error(error));
        });
    }
    
    function displayMenu() {
        const hamburgerMenuIcon = document.getElementById('hamburgerMenu');
        const hamburgerMenu = document.querySelector('.hamburger-menu');
        const closeMenu = document.querySelector('.close');

        closeMenu.addEventListener('click',function() {
            hamburgerMenu.style.display = 'none';
        });
    
        hamburgerMenuIcon.addEventListener('click', function() {
            // Toggle visibility of the hamburger menu
            hamburgerMenu.style.display = (hamburgerMenu.style.display === 'none' || hamburgerMenu.style.display === '') ? 'flex' : 'none';
            hamburgerMenu.style.zIndex = '1';
        });
    }
    
    
    function displayTextItem() {
        h1Elements.forEach((h1Element, index) => {
            switch(index) {
                case 0:
                    h1Element.textContent = "<HTML/>";
                    break;
                case 1:
                    h1Element.textContent = ".CSS{}";
                    break;
                case 2:
                    h1Element.textContent = "JQUERY();";
                    break;
                case 3:
                    h1Element.textContent = "<?PHP ?>";
                    break;
                default:
                    // Default case (optional)
                    break;
            }
        });
    }
    
    function displayPortfolio() {
        let maxIndex = 4;
        const maxItemsDisplayed = 9;
        const displayedItems = new Set(); // Create a Set to track displayed items
    
        gridItems.forEach((gridItem, index) => {

          if(index < maxIndex) {
            const imgPath = data.items[index].imgPath;
            const title = data.items[index].title;
            const paragraph = data.items[index].paragraph;
    
            // Check if the item has already been displayed
            if (!displayedItems.has(imgPath)) {
                displayedItems.add(imgPath); // Add the imgPath to the Set
    
                gridItem.style.backgroundImage = `url('${imgPath}')`;
                gridItem.style.backgroundSize = 'cover'; // Correct typo: bacgroundSize to backgroundSize
                gridItem.style.backgroundPosition = 'center';
                gridItem.style.zIndex = '0';
    
                const overlayContent = document.createElement("div");
                overlayContent.classList.add("overlay-content");
    
                const titleElement = document.createElement("h3");
                titleElement.classList.add("title");
                titleElement.textContent = title;
    
                const paragraphElement = document.createElement("p");
                paragraphElement.classList.add("paragraph");
                paragraphElement.textContent = paragraph;
    
                overlayContent.appendChild(titleElement);
                overlayContent.appendChild(paragraphElement);
    
                gridItem.appendChild(overlayContent);
    
                gridItem.addEventListener("mouseenter", () => {
                  overlayContent.style.display = "flex";
                });
    
                gridItem.addEventListener("mouseleave", () => {
                  overlayContent.style.display = "none";
                });
            }
           } else {
            gridItem.style.display = 'none';
           }
        });
    }
    
    displayPortfolio();
    displayTextItem();
    displayMenu();
    hireMe();
    // console.log(hireMe())
})

