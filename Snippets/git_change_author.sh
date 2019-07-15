git filter-branch -f --commit-filter '
        if [ "$GIT_COMMITTER_NAME" = "Evan Plaice" ];
        then
                GIT_COMMITTER_NAME="Evan Plaice";
                GIT_AUTHOR_NAME="Evan Plaice";
                GIT_COMMITTER_EMAIL="evanplaice@gmail.com";
                GIT_AUTHOR_EMAIL="evanplaice@gmail.com";
                git commit-tree "$@";
        else
                git commit-tree "$@";
        fi' HEAD