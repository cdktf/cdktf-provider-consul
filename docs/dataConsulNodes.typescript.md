# `data_consul_nodes`

Refer to the Terraform Registory for docs: [`data_consul_nodes`](https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/nodes).

# `dataConsulNodes` Submodule <a name="`dataConsulNodes` Submodule" id="@cdktf/provider-consul.dataConsulNodes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulNodes <a name="DataConsulNodes" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/nodes consul_nodes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer"></a>

```typescript
import { dataConsulNodes } from '@cdktf/provider-consul'

new dataConsulNodes.DataConsulNodes(scope: Construct, id: string, config?: DataConsulNodesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig">DataConsulNodesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig">DataConsulNodesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.putQueryOptions">putQueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.resetQueryOptions">resetQueryOptions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putQueryOptions` <a name="putQueryOptions" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.putQueryOptions"></a>

```typescript
public putQueryOptions(value: IResolvable | DataConsulNodesQueryOptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.putQueryOptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions">DataConsulNodesQueryOptions</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.resetId"></a>

```typescript
public resetId(): void
```

##### `resetQueryOptions` <a name="resetQueryOptions" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.resetQueryOptions"></a>

```typescript
public resetQueryOptions(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.isConstruct"></a>

```typescript
import { dataConsulNodes } from '@cdktf/provider-consul'

dataConsulNodes.DataConsulNodes.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.isTerraformElement"></a>

```typescript
import { dataConsulNodes } from '@cdktf/provider-consul'

dataConsulNodes.DataConsulNodes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.isTerraformDataSource"></a>

```typescript
import { dataConsulNodes } from '@cdktf/provider-consul'

dataConsulNodes.DataConsulNodes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.datacenter">datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.nodeIds">nodeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.nodeNames">nodeNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.nodes">nodes</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList">DataConsulNodesNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.queryOptions">queryOptions</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList">DataConsulNodesQueryOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.queryOptionsInput">queryOptionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions">DataConsulNodesQueryOptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

---

##### `nodeIds`<sup>Required</sup> <a name="nodeIds" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.nodeIds"></a>

```typescript
public readonly nodeIds: string[];
```

- *Type:* string[]

---

##### `nodeNames`<sup>Required</sup> <a name="nodeNames" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.nodeNames"></a>

```typescript
public readonly nodeNames: string[];
```

- *Type:* string[]

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.nodes"></a>

```typescript
public readonly nodes: DataConsulNodesNodesList;
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList">DataConsulNodesNodesList</a>

---

##### `queryOptions`<sup>Required</sup> <a name="queryOptions" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.queryOptions"></a>

```typescript
public readonly queryOptions: DataConsulNodesQueryOptionsList;
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList">DataConsulNodesQueryOptionsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `queryOptionsInput`<sup>Optional</sup> <a name="queryOptionsInput" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.queryOptionsInput"></a>

```typescript
public readonly queryOptionsInput: IResolvable | DataConsulNodesQueryOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions">DataConsulNodesQueryOptions</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulNodesConfig <a name="DataConsulNodesConfig" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.Initializer"></a>

```typescript
import { dataConsulNodes } from '@cdktf/provider-consul'

const dataConsulNodesConfig: dataConsulNodes.DataConsulNodesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/nodes#id DataConsulNodes#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.queryOptions">queryOptions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions">DataConsulNodesQueryOptions</a>[]</code> | query_options block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/nodes#id DataConsulNodes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `queryOptions`<sup>Optional</sup> <a name="queryOptions" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.queryOptions"></a>

```typescript
public readonly queryOptions: IResolvable | DataConsulNodesQueryOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions">DataConsulNodesQueryOptions</a>[]

query_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/nodes#query_options DataConsulNodes#query_options}

---

### DataConsulNodesNodes <a name="DataConsulNodesNodes" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodes.Initializer"></a>

```typescript
import { dataConsulNodes } from '@cdktf/provider-consul'

const dataConsulNodesNodes: dataConsulNodes.DataConsulNodesNodes = { ... }
```


### DataConsulNodesQueryOptions <a name="DataConsulNodesQueryOptions" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.Initializer"></a>

```typescript
import { dataConsulNodes } from '@cdktf/provider-consul'

const dataConsulNodesQueryOptions: dataConsulNodes.DataConsulNodesQueryOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.allowStale">allowStale</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/nodes#allow_stale DataConsulNodes#allow_stale}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.datacenter">datacenter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/nodes#datacenter DataConsulNodes#datacenter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.near">near</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/nodes#near DataConsulNodes#near}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.nodeMeta">nodeMeta</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/nodes#node_meta DataConsulNodes#node_meta}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.partition">partition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/nodes#partition DataConsulNodes#partition}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.requireConsistent">requireConsistent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/nodes#require_consistent DataConsulNodes#require_consistent}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.token">token</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/nodes#token DataConsulNodes#token}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.waitIndex">waitIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/nodes#wait_index DataConsulNodes#wait_index}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.waitTime">waitTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/nodes#wait_time DataConsulNodes#wait_time}. |

---

##### `allowStale`<sup>Optional</sup> <a name="allowStale" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.allowStale"></a>

```typescript
public readonly allowStale: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/nodes#allow_stale DataConsulNodes#allow_stale}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/nodes#datacenter DataConsulNodes#datacenter}.

---

##### `near`<sup>Optional</sup> <a name="near" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.near"></a>

```typescript
public readonly near: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/nodes#near DataConsulNodes#near}.

---

##### `nodeMeta`<sup>Optional</sup> <a name="nodeMeta" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.nodeMeta"></a>

```typescript
public readonly nodeMeta: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/nodes#node_meta DataConsulNodes#node_meta}.

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/nodes#partition DataConsulNodes#partition}.

---

##### `requireConsistent`<sup>Optional</sup> <a name="requireConsistent" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.requireConsistent"></a>

```typescript
public readonly requireConsistent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/nodes#require_consistent DataConsulNodes#require_consistent}.

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/nodes#token DataConsulNodes#token}.

---

##### `waitIndex`<sup>Optional</sup> <a name="waitIndex" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.waitIndex"></a>

```typescript
public readonly waitIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/nodes#wait_index DataConsulNodes#wait_index}.

---

##### `waitTime`<sup>Optional</sup> <a name="waitTime" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.waitTime"></a>

```typescript
public readonly waitTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/nodes#wait_time DataConsulNodes#wait_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataConsulNodesNodesList <a name="DataConsulNodesNodesList" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.Initializer"></a>

```typescript
import { dataConsulNodes } from '@cdktf/provider-consul'

new dataConsulNodes.DataConsulNodesNodesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.get"></a>

```typescript
public get(index: number): DataConsulNodesNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataConsulNodesNodesOutputReference <a name="DataConsulNodesNodesOutputReference" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.Initializer"></a>

```typescript
import { dataConsulNodes } from '@cdktf/provider-consul'

new dataConsulNodes.DataConsulNodesNodesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.meta">meta</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.taggedAddresses">taggedAddresses</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodes">DataConsulNodesNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.meta"></a>

```typescript
public readonly meta: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `taggedAddresses`<sup>Required</sup> <a name="taggedAddresses" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.taggedAddresses"></a>

```typescript
public readonly taggedAddresses: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataConsulNodesNodes;
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodes">DataConsulNodesNodes</a>

---


### DataConsulNodesQueryOptionsList <a name="DataConsulNodesQueryOptionsList" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.Initializer"></a>

```typescript
import { dataConsulNodes } from '@cdktf/provider-consul'

new dataConsulNodes.DataConsulNodesQueryOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.get"></a>

```typescript
public get(index: number): DataConsulNodesQueryOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions">DataConsulNodesQueryOptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataConsulNodesQueryOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions">DataConsulNodesQueryOptions</a>[]

---


### DataConsulNodesQueryOptionsOutputReference <a name="DataConsulNodesQueryOptionsOutputReference" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.Initializer"></a>

```typescript
import { dataConsulNodes } from '@cdktf/provider-consul'

new dataConsulNodes.DataConsulNodesQueryOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetAllowStale">resetAllowStale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetNear">resetNear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetNodeMeta">resetNodeMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetRequireConsistent">resetRequireConsistent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetWaitIndex">resetWaitIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetWaitTime">resetWaitTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowStale` <a name="resetAllowStale" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetAllowStale"></a>

```typescript
public resetAllowStale(): void
```

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetDatacenter"></a>

```typescript
public resetDatacenter(): void
```

##### `resetNear` <a name="resetNear" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetNear"></a>

```typescript
public resetNear(): void
```

##### `resetNodeMeta` <a name="resetNodeMeta" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetNodeMeta"></a>

```typescript
public resetNodeMeta(): void
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetPartition"></a>

```typescript
public resetPartition(): void
```

##### `resetRequireConsistent` <a name="resetRequireConsistent" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetRequireConsistent"></a>

```typescript
public resetRequireConsistent(): void
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetToken"></a>

```typescript
public resetToken(): void
```

##### `resetWaitIndex` <a name="resetWaitIndex" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetWaitIndex"></a>

```typescript
public resetWaitIndex(): void
```

##### `resetWaitTime` <a name="resetWaitTime" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetWaitTime"></a>

```typescript
public resetWaitTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.allowStaleInput">allowStaleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.datacenterInput">datacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.nearInput">nearInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.nodeMetaInput">nodeMetaInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.partitionInput">partitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.requireConsistentInput">requireConsistentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.waitIndexInput">waitIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.waitTimeInput">waitTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.allowStale">allowStale</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.datacenter">datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.near">near</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.nodeMeta">nodeMeta</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.partition">partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.requireConsistent">requireConsistent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.waitIndex">waitIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.waitTime">waitTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions">DataConsulNodesQueryOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowStaleInput`<sup>Optional</sup> <a name="allowStaleInput" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.allowStaleInput"></a>

```typescript
public readonly allowStaleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.datacenterInput"></a>

```typescript
public readonly datacenterInput: string;
```

- *Type:* string

---

##### `nearInput`<sup>Optional</sup> <a name="nearInput" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.nearInput"></a>

```typescript
public readonly nearInput: string;
```

- *Type:* string

---

##### `nodeMetaInput`<sup>Optional</sup> <a name="nodeMetaInput" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.nodeMetaInput"></a>

```typescript
public readonly nodeMetaInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.partitionInput"></a>

```typescript
public readonly partitionInput: string;
```

- *Type:* string

---

##### `requireConsistentInput`<sup>Optional</sup> <a name="requireConsistentInput" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.requireConsistentInput"></a>

```typescript
public readonly requireConsistentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `waitIndexInput`<sup>Optional</sup> <a name="waitIndexInput" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.waitIndexInput"></a>

```typescript
public readonly waitIndexInput: number;
```

- *Type:* number

---

##### `waitTimeInput`<sup>Optional</sup> <a name="waitTimeInput" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.waitTimeInput"></a>

```typescript
public readonly waitTimeInput: string;
```

- *Type:* string

---

##### `allowStale`<sup>Required</sup> <a name="allowStale" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.allowStale"></a>

```typescript
public readonly allowStale: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.datacenter"></a>

```typescript
public readonly datacenter: string;
```

- *Type:* string

---

##### `near`<sup>Required</sup> <a name="near" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.near"></a>

```typescript
public readonly near: string;
```

- *Type:* string

---

##### `nodeMeta`<sup>Required</sup> <a name="nodeMeta" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.nodeMeta"></a>

```typescript
public readonly nodeMeta: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

---

##### `requireConsistent`<sup>Required</sup> <a name="requireConsistent" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.requireConsistent"></a>

```typescript
public readonly requireConsistent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `waitIndex`<sup>Required</sup> <a name="waitIndex" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.waitIndex"></a>

```typescript
public readonly waitIndex: number;
```

- *Type:* number

---

##### `waitTime`<sup>Required</sup> <a name="waitTime" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.waitTime"></a>

```typescript
public readonly waitTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataConsulNodesQueryOptions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions">DataConsulNodesQueryOptions</a>

---



