export default function partOne(data: string): number {
  const parsed = parse(data);

	// Subtract 1 from length of keys because we don't 
	// want to count the members attribute
  return parsed.reduce((acc, curr) => acc + Object.keys(curr).length - 1, 0);
}

type ParsedResponses = {
	[key: string]: number;
	members: number;
};

export function parse(data: string): ParsedResponses[] {
  const groups = [];
  let response = {};
  let membersInGroup = 0;
  data.split("\n").forEach((entry) => {
    if (entry === "") {
      if (Object.keys(response).length) {
        groups.push(response);
      }
      response = {};
      membersInGroup = 0;
    } else {
      [...entry].forEach((answer) => {
        response[answer]
          ? (response[answer] = response[answer] + 1)
          : (response[answer] = 1);
      });
      response["members"] = ++membersInGroup;
    }
  });

  if (Object.keys(response).length) {
    groups.push(response);
  }
  return groups;
}
