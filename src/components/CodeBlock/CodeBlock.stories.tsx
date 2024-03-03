import { Meta, StoryObj } from "@storybook/react";
import { CodeBlock } from "./CodeBlock";

const meta: Meta<typeof CodeBlock> = {
    component  : CodeBlock,
    tags       : [ "autodocs" ],
    parameters : {
        docs : {
            description : {
                component : "This is a code block.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof CodeBlock>;

export const JavaScript: Story = {
    args : {
        source   : `const add = (a, b) => {
    return a + b;
}`,
        language : "javascript",
    },
};

export const CSS: Story = {
    args : {
        source   : `& code[class*=language-] ::-moz-selection {
    text-shadow : none;
    color       : var(--text-selected);
    background  : var(--text-bg-selected) !important;
}

@media print {
    & pre[class*="language-"],
    & code[class*="language-"] {
        text-shadow : none;
        background  : #f5f2f0;
    }
}

.some-class {
    position   : absolute;
    top        : -2px;
    height     : calc(100% + 4px);
    width      : 2px;
    background : var(--meter-optimum-marker-bg);
}

#some-id {
    position : relative;
    width    : 100%;
}
`,
        language : "css",
    },
};

export const Python: Story = {
    args : {
        source   : `from collections import defaultdict
#merge two or more dicts using the collections module
def merge_dicts(*dicts):
    mdict = defaultdict(list)
    for d in dicts:
        for key in d:
            mdict[key].append(d[key])
    return dict(mdict)`,
        language : "python",
    },
};

export const Go: Story = {
    args : {
        source   : `package main
import "fmt"

func main() {
    fmt.Println("Hello from the GO programming language")
    fmt.Println("This is lot like C programming language")
}`,
        language : "go",
    },
};

export const CSharp: Story = {
    args : {
        source   : `Dictionary<string, int> dimensions = new Dictionary<string, int>
{
    { "length", 10 },
    { "width", 20 },
    { "height", 30 }
};

int valueToFind = 20;`,
        language : "csharp",
    },
};

export const TypeScript: Story = {
    args : {
        language : "typescript",
        source   : `interface Person {
    name: string;
    age: number;
}`,
    },
};

export const JSON: Story = {
    args : {
        language : "json",
        source   : `{
    "name": "John Doe",
    "age": 30,
    "cars": {
        "car1": "Ford",
        "car2": "BMW",
        "car3": "Fiat"
    }
}`,
    },
};

export const Swift: Story = {
    args : {
        language : "swift",
        source   : `import SwiftUI
import RealmSwift
let app = RealmSwift.App(id: "rchat-xxxxx") // TODO: Set the Realm application ID
@main
struct RChatApp: SwiftUI.App {
   @StateObject var state = AppState()

   var body: some Scene {
      WindowGroup {
            ContentView()
               .environmentObject(state)
      }
   }
}`,
    },
};

export const Kotlin: Story = {
    args : {
        language : "kotlin",
        source   : `fun main() {
    println("Hello, World!")
    
    val a = 10
    val b = 20
    val sum = a + b
}`,
    },
};

export const GraphQL: Story = {
    args : {
        language : "graphql",
        source   : `{
    "data": {
    "search": [{
            "__typename": "Human",
            "name": "Han Solo"
        },
        {
            "__typename": "Human",
            "name": "Leia Organa"
        },
        {
            "__typename": "Starship",
            "name": "TIE Advanced x1"
        }]
    }
}`,
    },
};

export const YAML: Story = {
    args : {
        language : "yaml",
        source   : `name: John Doe
age: 30
married: true
children:
    - name: Jane
      age: 6
    - name: John
      age: 4
cars:
    - Ford
    - BMW
    - Fiat`,
    },
};
