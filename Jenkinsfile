pipeline {
    agent {
        docker { image 'cypress/browsers:latest' }
    }
    stages {
        stage('build and test') {
            steps {
                sh 'npm ci'

                sh 'npm run test'
            }
        }
    }
}