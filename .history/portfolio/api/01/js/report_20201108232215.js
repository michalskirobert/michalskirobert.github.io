//reportJS by Robert Michalski

function report() {
    var reportWindow = document.getElementById("reportWindow");
    var pageName = window.location.pathname;

    var codeBlock = `
    <div class="report__base" id="myReport">
    <span id="close" onclick="showOld()">&times;</span>
    <div class="report__content" id="report01">
    <h3>Report page</h3>
    <form method="post" action="https://saro.website/report.php" class="report__form">
    <input name="language" id="language" value="${language[i].lang}" style="display: none;">
    <input name="page" id="page" value="${pageName}" style="display: none;">
    <input name="lang" id="lang" value="English" style="display: none;">
    <select name="category" id="category" required>
    <option value="Bug">Bug</option>
    <option value="Page does not work">Page does not work</option>
    <option value="Problem with displying">Page displays incorrectly</option>
    <option value="other">Other</option></select>
    <input type="text" name="other" id="other" class="issue" placeholder="if other, what is it?">
    <textarea name="describe" id="describe" cols="30" rows="10" placeholder="Describe your issue or feedback here" required></textarea>
    <i>*Additional informations name, email are not requested</i>
    <div class="form__label__left">
    <input type="text" name="name" id="name" class="issue" placeholder="Name">
    <input type="email" name="email" id="email" class="issue" placeholder="Email">
    <input type="submit" class="button__black" value="Send">
    </form>
    </div>
    </div>
    </div>`;

      reportWindow.innerHTML = codeBlock;

  }

  function showOld() {
    document.getElementById("myReport").style.display = "none";
}
