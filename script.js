<script>
      const btn = document.querySelector("button");
      const submit = document.querySelector(".Submit");
      const widget = document.querySelector(".star-widget");
      const editBtn = document.querySelector(".edit");
      btn.onclick = ()=> {
        widget.style.display = "none";
        post.style.display = "block";
        editBtn.onclick = ()=> {
          widget.style.display = "block";
          post.style.display = "none";
        }
        return false;
      }
    </script>