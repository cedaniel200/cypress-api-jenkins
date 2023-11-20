pipeline {
    agent {
        docker { image 'cypress/browsers:latest' }
    }
    stages {
        stage('build and test') {
            steps {
                sh 'npm install'
                sh 'npm fund'

                sh 'npm run test'
            }
        }
    }
}