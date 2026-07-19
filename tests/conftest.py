import sys
import os

# Automatically append the project root folder to Python's system path before test collection
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))
