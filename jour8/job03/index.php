<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Document</title>
</head>

<body>
    <header>
        <nav class="flex justify-around bg-indigo-300 h-16 items-center">
            <a href="index.php">Accueil</a>
            <a href="index.php">Inscription</a>
            <a href="index.php">Connexion</a>
            <a href="index.php">Rechercher</a>
        </nav>
    </header>
    <main>
        <section>
            <form action="">
                <input type="radio" name="civilite" id=""> Mme
                <input type="radio" name="civilite" id=""> Mr
                <br><label for="prenom">Prénom:</label>
                <input type="text" name="" id="prenom"><br>
                <label for="nom">Nom:</label>
                <input type="text" name="" id="nom"><br>
                <label for="adresse">Adresse:</label>
                <input type="text" name="" id="adresse"><br>
                <label for="email">Email:</label>
                <input type="email" name="" id="email"><br>
                <label for="password">Password:</label>
                <input type="password" name="" id="password"><br>
                <label for="confirm_password">Confirm Password:</label>
                <input type="password" name="" id="confirm_password"><br>
                <fieldset>
                    <legend>Tes passions:</legend>

                    <div>
                        <input type="checkbox" id="informatique" name="informatique" checked>
                        <label for="informatique">Informatique</label>
                    </div>

                    <div>
                        <input type="checkbox" id="voyages" name="voyages">
                        <label for="voyages">Voyages</label>
                    </div>
                    <div>
                        <input type="checkbox" id="sport" name="sport" checked>
                        <label for="sport">Sport</label>
                    </div>

                    <div>
                        <input type="checkbox" id="lecture" name="lecture">
                        <label for="lecture">Lecture</label>
                    </div>
                </fieldset>
                <button type="submit">Valider</button>


            </form>
        </section>
    </main>
    <footer class="flex justify-around bg-indigo-300 h-16 items-center fixed bottom-0 w-full">
        <a href="index.php">Accueil</a>
        <a href="index.php">Inscription</a>
        <a href="index.php">Connexion</a>
        <a href="index.php">Rechercher</a>
    </footer>
</body>

</html>