pipeline {
    agent {
        docker { image 'cypress/browsers:latest' }
    }
    stages {
        stage('build') {
            steps {
                bat 'npm install'
            }
        }
        stage('test') {
            steps {
                bat 'npx run'
            }
        }
    }
}