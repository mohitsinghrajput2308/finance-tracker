from fpdf import FPDF
import re

class PDF(FPDF):
    def header(self):
        if self.page_no() > 1:
            self.set_font('Arial', 'I', 8)
            self.cell(0, 10, 'Personal Finance Management & Investment Tracker - RSD', 0, 0, 'L')
            self.cell(0, 10, f'Page {self.page_no()}', 0, 0, 'R')
            self.ln(15)
    
    def footer(self):
        self.set_y(-15)
        self.set_font('Arial', 'I', 8)
        self.cell(0, 10, f'Page {self.page_no()}', 0, 0, 'C')

# Read markdown file
with open('Requirement_Specification_Document.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Create PDF
pdf = PDF()
pdf.set_auto_page_break(auto=True, margin=15)
pdf.add_page()

# Title Page
pdf.set_font('Arial', 'B', 24)
pdf.ln(60)
pdf.cell(0, 10, 'REQUIREMENT SPECIFICATION', 0, 1, 'C')
pdf.cell(0, 10, 'DOCUMENT', 0, 1, 'C')
pdf.ln(20)
pdf.set_font('Arial', 'B', 18)
pdf.cell(0, 10, 'Personal Finance Management &', 0, 1, 'C')
pdf.cell(0, 10, 'Investment Tracker System', 0, 1, 'C')
pdf.ln(40)
pdf.set_font('Arial', '', 12)
pdf.cell(0, 10, 'B.Sc. (Computer Science) Internship 2025', 0, 1, 'C')
pdf.ln(10)
pdf.cell(0, 10, 'Submission Date: January 8, 2026', 0, 1, 'C')
pdf.cell(0, 10, 'Version: 1.0', 0, 1, 'C')

# Process content
lines = content.split('\n')
pdf.add_page()

for line in lines:
    line = line.strip()
    
    if not line or line.startswith('---') or line == '# REQUIREMENT SPECIFICATION DOCUMENT':
        continue
    
    # Main headings (##)
    if line.startswith('## '):
        pdf.ln(5)
        pdf.set_font('Arial', 'B', 16)
        text = line.replace('## ', '')
        pdf.multi_cell(0, 10, text)
        pdf.ln(3)
    
    # Sub headings (###)
    elif line.startswith('### '):
        pdf.ln(3)
        pdf.set_font('Arial', 'B', 14)
        text = line.replace('### ', '')
        pdf.multi_cell(0, 8, text)
        pdf.ln(2)
    
    # Sub-sub headings (####)
    elif line.startswith('#### '):
        pdf.ln(2)
        pdf.set_font('Arial', 'B', 12)
        text = line.replace('#### ', '')
        pdf.multi_cell(0, 7, text)
        pdf.ln(1)
    
    # Bold text
    elif line.startswith('**') and line.endswith('**'):
        pdf.set_font('Arial', 'B', 11)
        text = line.replace('**', '')
        pdf.multi_cell(0, 6, text)
    
    # Tables (simple handling)
    elif '|' in line and not line.startswith('```'):
        pdf.set_font('Arial', '', 9)
        # Remove markdown table syntax
        text = line.replace('|', ' | ')
        pdf.multi_cell(0, 5, text)
    
    # Code blocks
    elif line.startswith('```'):
        continue
    
    # Lists
    elif line.startswith('- ') or line.startswith('* '):
        pdf.set_font('Arial', '', 10)
        text = '  ' + line
        pdf.multi_cell(0, 5, text)
    
    # Numbered lists
    elif re.match(r'^\d+\.', line):
        pdf.set_font('Arial', '', 10)
        pdf.multi_cell(0, 5, line)
    
    # Regular paragraphs
    elif line and not line.startswith('#'):
        pdf.set_font('Arial', '', 10)
        # Remove markdown links
        text = re.sub(r'\[([^\]]+)\]\([^\)]+\)', r'\1', line)
        # Remove bold/italic
        text = text.replace('**', '').replace('*', '')
        pdf.multi_cell(0, 5, text)

# Save PDF
pdf.output('Requirement_Specification_Document.pdf')
print("PDF created successfully: Requirement_Specification_Document.pdf")
