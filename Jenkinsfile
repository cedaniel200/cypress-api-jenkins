pipeline {
    agent {
        docker { image 'cypress/browsers:latest' }
    }
    stages {
        stage('run json-server') {
            steps {
                sh """
                    cd /var/jenkins_home/workspace/
                    chmod -R 777
                    rm -f -r json-server-master
                    mkdir -p json-server-master
                    cd json-server-master
                """
                git 'https://github.com/typicode/json-server.git'
                sh """
                    cd /var/jenkins_home/workspace/json-server-master
                    echo "{"posts": [{ "id": 1, "title": "Aprendiendo Cypress - Módulo 1", "author": "Cesar" },{ "id": 2, "title": "Aprendiendo Cypress - Módulo 2", "author": "Cesar" }],"comments": [{ "id": 1, "body": "Muy buen Módulo", "postId": 1 }],"profile": { "name": "Cesar" }}" > db.json
                    npm install
                    node run start
                """
            }
        }
        stage('build') {
            steps {
                sh 'ls'
                sh 'npm ci'
            }
        }
        stage('test') {
            steps {
                sh 'npm run test'
            }
        }
    }
}