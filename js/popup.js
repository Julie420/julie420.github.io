        function popup(text) {
            let p = document.createElement("div");
            p.className = "popup";
            let t = document.createElement("p");
            t.innerHTML = text;
            let a = document.createElement("a");
            a.className = "popup-accept";
            a.innerText = "Ok";
            a.onclick = () => {
                p.parentNode.removeChild(p);
            };

            p.appendChild(t);
            p.appendChild(a);
            document.body.appendChild(p);
        }
