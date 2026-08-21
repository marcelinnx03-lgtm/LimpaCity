@ECHO OFF
SETLOCAL
SET "BASEDIR=%~dp0"
java -classpath "%BASEDIR%.mvn\wrapper\maven-wrapper.jar" org.apache.maven.wrapper.MavenWrapperMain %*
ENDLOCAL
