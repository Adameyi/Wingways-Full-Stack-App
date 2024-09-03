import json
import os

# Checker to find any IATA duplicates before migration. IATA Codes must be unique.
def find_duplicate_iata_codes(data):
    iata_codes = {}
    duplicates = []

    for item in data:
        iata_code = item['fields']['iata_code']
        if iata_code in iata_codes:
            duplicates.append((iata_code, item['pk'], iata_codes[iata_code]))
        else:
            iata_codes[iata_code] = item['pk']

    return duplicates

def main():
    json_path = 'backend/api/fixtures/airports_fixture.json'
    
    if not os.path.exists(json_path):
        print(f"Error: The file {json_path} does not exist.")
        return
    
    try:
        with open(json_path, 'r') as f:
            data = json.load(f)
    except json.JSONDecodeError:
        print("Error: Failed to decode JSON.")
        return
    except IOError as e:
        print(f"Error: {e}")
        return

    # Find duplicate IATA codes
    duplicates = find_duplicate_iata_codes(data)

    # Print the duplicates
    if duplicates:
        print("Duplicate IATA codes found:")
        count = 0
        for duplicate in duplicates:
            count += 1
            print(f"IATA code: {duplicate[0]}, PKs: {duplicate[1]}, {duplicate[2]}")
        print("Total Duplicates: ", count)
    else:
        print("No duplicate IATA codes found.")

if __name__ == '__main__':
    main()
