git-scm.com/download

git init //inicia um repositorio
git add landingpage.html //determina quais arquivos serão enviados para o repositorio
git add . //adiciona todas as alterações que estiverem na pasta
git commit -m "added landing page" //commita o codigo
git log //verifica commits(?) no projeto
git status //mostra alterações no projeto
git checkout //descarta alterações no diretorio utilizado
git show 'numeroDoCommit' //mostra o commits
git show //mostra ultimo commit
git branch feature/cart //cria uma ramificação do projeto
git checkout feature/cart //troca para a branch escolhida
git branch //mostra todas as branches
ls al //???
git merge feature/cart //mescla a branch com a principal
git branch -D feature/cart //deleta a branch

//Precisa criar repositorio no github antes de commitar pelo git (assim como no github desktop)

git remote add origin 'linkDoRepositorio' //envia o repositorio local para o repositorio do github
git push -u origin master //dá o primeiro push na branch master no github
git config credential.helper.store //pra nao precisar ficar colocando usuario e senha toda hora
git clone 'linkDoRepositorio' //duh
git commit -am 'update package.json' //faz uma atualização
