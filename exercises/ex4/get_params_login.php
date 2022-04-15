<!DOCTYPE html>
<html>

<head>
    <title></title>
</head>

<body>
    <section>
        Welcome
        <?php
        $userName = "galor";
        $password = '123';
        $un = $_GET["reg_un"];
        $pw = $_GET["reg_pass"];

        if ($un ==  $userName && $pw == $password)
            echo "<h2>Good morning " . $un . "</h2>";
        else
            echo "<h2>Who are you?</h2>";
        ?>
    </section>
</body>

</html>