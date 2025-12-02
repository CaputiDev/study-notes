# Pega a mensagem do último commit
$LastCommitMessage = git log -1 --pretty=%s
Write-Host " Iniciando deploy com a mensagem: '$LastCommitMessage'" -ForegroundColor Cyan

# Configura as variáveis
$env:GIT_USER = "CaputiDev"
$env:DEPLOYMENT_MESSAGE = $LastCommitMessage

# Roda o comando
npm run deploy