<!DOCTYPE html>
<html>

<head>
    <title></title>
    <script src="js/javascript.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
</head>

<body>
    <section>
        <?php
    $userName = "galor";
    $password = '123';
    $un = $_GET["reg_un"];
    $pw = $_GET["reg_pass"];
    $color = $_GET["reg_color"];


    if ($un ==  $userName && $pw == $password) {
      echo "
        <div class='container px-4'>
          <div class='row gx-5'>
            <div class='col'>
              <div class='p-3 border bg-light h-100'>Hey $un, your new email design: 
                <button type='button' class='btn btn-primary position-relative'>
                  Inbox
                  <span class='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-$color'>
                    99+
                    <span class='visually-hidden'>unread messages</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ";
    } else
      echo "
      <div class='container px-4'>
      <div class='row gx-5'>
        <div class='col'>
          <div class='p-3 border bg-light h-100'>One of your parameters was WRONG, try again 
          </div>
        </div>
      </div>
    </div>
      ";
    ?>
    </section>
</body>

</html>