
document.addEventListener("DOMContentLoaded", (e) => {
    const includeHTML = (el, url) => {
      const xhr = new XMLHttpRequest();
  
      xhr.addEventListener("readystatechange", (e) => {
        if (xhr.readyState !== 4) return;
  
        if (xhr.status >= 200 && xhr.status < 300) {
          el.outerHTML = xhr.responseText;
        } else {
          let message =
            xhr.statusText ||
            "Error loading the file, verify that you are making the request by http or https";
          el.outerHTML = `<div><p>Error ${xhr.status}: ${message}</p></div>`;
          
        }
      });
  
      xhr.open("GET", url);
      xhr.setRequestHeader("Content-type", "text/html; charset=utf-8");
      xhr.send();
    };
  
    document
      .querySelectorAll("[data-include]")
      .forEach((el) => includeHTML(el, el.getAttribute("data-include")));
  });



  window.onload = function(){
    
    const nav = document.querySelector('.nav');
    const nav1 = document.querySelector('.sub_menu');
    const menu_btn = document.querySelector('.menu_btn');
    const menu = document.querySelector('.menu');

      window.addEventListener('scroll', function(){
          nav.classList.toggle('active', window.scrollY > 3)
          nav1.classList.toggle('active1', window.scrollY >3)
      })

      menu_btn.addEventListener('click', () => {
          menu.classList.toggle('active')

        })

  }
  