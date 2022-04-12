<template>
  <div>
    <h1 class="text-2xl font-bold text-[#333] mb-3">Categories</h1>
    <div>
      <ul id="menu">
        <!-- <li
          class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600"
        >
          Profile
        </li>
        <li
          class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600"
        >
          Settings
        </li>
        <li
          class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600"
        >
          Messages
        </li>
        <li class="w-full px-4 py-2">Download</li> -->
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      json: {
        data: [
          { title: "Game", link: "/game", sub: null },
          { title: "Community", link: "/community", sub: null },
          { title: "Media", link: "/media", sub: null },
          {
            title: "Forums",
            link: "/forums",
            sub: [
              { title: "Gameplay", link: "/gameplay", sub: null },
              {
                title: "Classes",
                link: "/classes",
                sub: [
                  { title: "Barbarian", link: "/barbarian", sub: null },
                  { title: "Demon Hunter", link: "/demon-hunter", sub: null },
                  { title: "Monk", link: "/monk", sub: null },
                  { title: "Witch Doctor", link: "/witch-doctor", sub: null },
                  { title: "Wizard", link: "/wizard", sub: null },
                ],
              },
              { title: "Beta", link: "/beta", sub: null },
              { title: "Support", link: "/support", sub: null },
            ],
          },
          { title: "Services", link: "/services", sub: null },
        ],
      },
    };
  },
  mounted() {
    this.menuBuilder(document.getElementById("menu"), this.json.data);
  },
  methods: {
    createSlug: function (e) {
      return e.replace(/\s+/g, "-").toLowerCase();
    },
    menuBuilder: function (element, data, link) {
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement("li");

        listItem.innerHTML = data[i].title;

        var formattedLink =
          typeof link === "undefined" ? data[i].link : link + data[i].link;

        listItem.setAttribute("href", formattedLink);

        element.appendChild(listItem);

        if (data[i].sub != null) {
          var caret = document.createElement("span");

          caret.className = "caret";

          listItem.appendChild(caret);

          var subUl = document.createElement("ul");

          subUl.className = "sub-menu-" + this.createSlug(data[i].title);

          listItem.appendChild(subUl);
          this.menuBuilder(subUl, data[i].sub, formattedLink);
        }
      }
    },
  },
};
</script>

<style scoped>
:deep(#menu){
  font-size: 14px;
}

:deep(ul) {
  display: block;
  list-style: none;
  border: 1px solid rgba(0, 0, 0, 0.05);
  /* width: 257px; */
}

:deep(li:hover) {
  background-color: #171515;
}

:deep(ul li) {
  background-color: white;
  color: #333;
  width: 257px;
  /* width: 100%; */
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  cursor: pointer;
  -o-transition: 0.5s;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

:deep(ul li:last-of-type) {
  border: none;
}

:deep(li:hover) {
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

:deep(ul ul) {
  position: relative;
  margin-top: -21px;
  margin-left: 164px;

  /* margin-top: -50px;
  margin-left: 164px; */
  z-index: 111;
  /* right: 0%;
  z-index: 1111; */
}

:deep(ul ul ul) {
  position: relative;
}

:deep(ul ul),
:deep(ul ul ul) {
  display: none;
}

:deep(ul > li:hover > ul) {
  display: inline-block;
}

:deep(.caret) {
  display: inline;
  margin: 5px;
  width: 5px;
  height: 5px;
  border-top: 2px solid #333;
  border-right: 2px solid #333;
  float: right;

  -ms-transform: rotate(45deg); /* IE 9 */
  -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
  transform: rotate(45deg);
}

:deep(.caret:hover) {
  border-top: 2px solid white;
  border-right: 2px solid white;
}

@media (max-width: 768px) {
  :deep(ul li) {
    width: 100%;
  }
  :deep(ul > li:hover > ul) {
    display: none;
  }
}
/* class="text-sm text-[#333] bg-white border border-gray-200" */
</style>
