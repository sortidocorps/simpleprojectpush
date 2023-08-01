const { execSync } = require("child_process");
const fs = require("fs");

const repoPath = "/"; // Remplacez par le chemin absolu de votre répertoire Git local
const commitMessage = "Message du commit quotidien";
const branchName = "main";
const filePath = "append.md"; // Chemin relatif vers le fichier que vous souhaitez modifier

// Fonction pour effectuer le commit et le push
function commitAndPush() {
  try {
    // Modifier le fichier
    fs.appendFileSync(filePath, "\nModification quotidienne.");

    // Ajouter les modifications et faire un commit
    //execSync(`cd ${repoPath} && git add . && git commit -m "${commitMessage}"`);
    execSync(`git add . && git commit -m "${commitMessage}"`);

    // Push vers la branche spécifiée
    //execSync(`cd ${repoPath} && git push origin ${branchName}`);
    execSync(`git push`);

    console.log("Commit and push successful.");
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

// Planifie l'exécution du script tous les jours à minuit (00:00)
// const cron = require("node-cron");
// cron.schedule("0 0 * * *", commitAndPush);

console.log("Script scheduled to run daily at midnight (00:00).");
