<?xml version="1.0"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>

<h3 style="font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">Hassan's CV</h3>
<table border="2" style="font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">

	<tr bgcolor="red" style="align-items: center;"><th>Name</th><th>Occupation</th><th>Program</th><th>Age</th></tr>
	<xsl:for-each select="CV/aboutMe">
		<tr> 
			<td><xsl:value-of select="Name"/></td>
			<td><xsl:value-of select="Occupation"/></td>
			<td><xsl:value-of select="Program"/></td>	
			<td><xsl:value-of select="Age"/></td>
					
		</tr>
	</xsl:for-each>

	<tr bgcolor="red"><th>Project Title</th><th>Description</th><th>Duration</th><th>Personal Review</th></tr>
	<xsl:for-each select="CV/Projects">
		<tr> 
			<td><xsl:value-of select="Title"/></td>
			<td><xsl:value-of select="Description"/></td>
			<td><xsl:value-of select="Duration"/></td>
			<td><xsl:value-of select="PersonalReview"/></td>
		</tr>
	</xsl:for-each>

	<tr bgcolor="red"><th>SoftSkills Name</th><th>Description</th></tr>
	<xsl:for-each select="CV/softSkills">
		<tr> 
			<td><xsl:value-of select="Name"/></td>
			<td><xsl:value-of select="Description"/></td>
		</tr>
	</xsl:for-each>

	<tr bgcolor="red"><th>Contact Me</th><th>Phone Number</th><th>Student Email</th></tr>
	<xsl:for-each select="CV/Contact">
		<tr> 
			<td><xsl:value-of select="Name"/></td>
			<td><xsl:value-of select="Phone"/></td>
			<td><xsl:value-of select="Email"/></td>
		</tr>
	</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>