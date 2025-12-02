# Pega a mensagem do último commit
$LastCommitMessage = git log -1 --pretty=%s

# Verifica se pegou a mensagem, senão usa uma padrão
if (-not $LastCommitMessage) {
    $LastCommitMessage = "Atualização do site"
}

Write-Host "Iniciando Deploy Automatizado" -ForegroundColor Cyan
Write-Host "Mensagem do Commit: '$LastCommitMessage'" -ForegroundColor Yellow

# Configura as variáveis de ambiente para a sessão atual
$env:GIT_USER = "CaputiDev"
$env:DEPLOYMENT_MESSAGE = $LastCommitMessage

# Executa o comando de deploy
npm run deploy