function search_notes() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("notes-list");
  li = ul.getElementsByClassName('notes-item');

  ul.scrollTop

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    var title_found;
    hd = li[i].getElementsByTagName("h3")[0];
    txtValue = hd.textContent || hd.innerText;
    title_found = txtValue.toUpperCase().indexOf(filter) > -1;
    var alias_found;
    tag_or_alias_found = false;
    aliases = li[i].getElementsByClassName('note-aliases');

    if (aliases.length > 0) {
      for (j = 0; j < aliases.length; j++) {
        alias = aliases[j];

        txtValue = alias.textContent || alias.innerText;
        tag_or_alias_found = tag_or_alias_found || (txtValue.toUpperCase().indexOf(filter) > -1);
      }
    }

    var tags_checked = document.querySelector('#search-check-tags').checked
    if (tags_checked) {
      tags = li[i].getElementsByClassName('note-tags');
      if (tags.length > 0) {
        for (j = 0; j < tags.length; j++) {
          alias = tags[j];

          txtValue = alias.textContent || alias.innerText;
          tag_or_alias_found = tag_or_alias_found || (txtValue.toUpperCase().indexOf(filter) > -1);
        }
      }
    }
    // if aliases
    if (title_found || tag_or_alias_found) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }

  ul.scrollTop = 0

}
