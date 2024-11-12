const genAI = require('../config/gemini');

const generateCareerInfo = async (req, res) => {
  try {
    const { careerPath } = req.params;
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `Generate detailed information about the ${careerPath} career path in Web3, including:
    1. Background knowledge required
    2. Technical skills needed
    3. Learning path with specific steps
    4. Recommended resources for learning
    Please format the response in JSON with the following structure:
    {
      "title": "Career Title",
      "description": "Brief description",
      "background": [
        {
          "title": "Topic title",
          "content": "Detailed explanation"
        }
      ],
      "learningPath": [
        {
          "label": "Step name",
          "description": "Step details",
          "resources": [
            {
              "name": "Resource name",
              "url": "Resource URL"
            }
          ]
        }
      ]
    }`;

    const result = await model.generateContent(prompt);
    const response = result.response;

    const text = response.text();
    console.log(response.text());
    const jsonStart = text.indexOf('{');
    const jsonEnd = text.lastIndexOf('}') + 1;
    const jsonText = text.substring(jsonStart, jsonEnd);
    
    res.json(JSON.parse(jsonText));
  } catch (error) {
    console.error('Error generating career info:', error);
    res.status(500).json({ 
      error: 'Failed to generate career information',
      details: error.message 
    });
  }
};

module.exports = {
  generateCareerInfo
}; 