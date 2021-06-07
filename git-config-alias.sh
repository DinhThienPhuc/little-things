echo "Configure My Git Aliass"

git config --global alias.a "add"

# Đánh dấu tất cả tập tin trong thư mục hiện tại, chuẩn bị commit
git config --global alias.aa "add ."

git config --global alias.cm "commit -m"

# Commit và đặt chữ ký
git config --global alias.cms "commit -s"

# Kết hợp với commit trước đó và đặt chữ ký
git config --global alias.cma "commit --amend"

git config --global alias.d "diff"
git config --global alias.ds "diff --stat"

# Hiển thị thay đổi với những tập tin đã được staged
git config --global alias.dc "diff --cached"

git config --global alias.s "status -s"
git config --global alias.st 'status -sb'
git config --global alias.co "checkout"

# Checkout  một nhánh mới
git config --global alias.cob "checkout -b"

# Hiển thị git log colorful
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"

# Log ra commit cuối cùng
git config --global alias.last 'log -1 HEAD --stat'

# Hiển thị các branch
git config --global alias.rv 'remote -v'

# Tìm kiếm commit
git config --global alias.sc '!git rev-list --all | xargs git grep -F'

# Rebase nhánh
git config --global alias.rbi '!git rebase -i'

# Rebase continue
git config --global alias.rbc '!git rebase --continue'

git config --global alias.po '!git pull origin'
