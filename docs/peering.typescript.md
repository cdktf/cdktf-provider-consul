# `consul_peering`

Refer to the Terraform Registory for docs: [`consul_peering`](https://www.terraform.io/docs/providers/consul/r/peering).

# `peering` Submodule <a name="`peering` Submodule" id="@cdktf/provider-consul.peering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Peering <a name="Peering" id="@cdktf/provider-consul.peering.Peering"></a>

Represents a {@link https://www.terraform.io/docs/providers/consul/r/peering consul_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.peering.Peering.Initializer"></a>

```typescript
import { peering } from '@cdktf/provider-consul'

new peering.Peering(scope: Construct, id: string, config: PeeringConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.peering.Peering.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.peering.Peering.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.peering.Peering.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.peering.PeeringConfig">PeeringConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.peering.Peering.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.peering.Peering.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-consul.peering.Peering.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.peering.PeeringConfig">PeeringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.peering.Peering.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.peering.Peering.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.peering.Peering.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.peering.Peering.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.peering.Peering.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.resetMeta">resetMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.resetPartition">resetPartition</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.peering.Peering.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.peering.Peering.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.peering.Peering.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.peering.Peering.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.peering.Peering.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.peering.Peering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.peering.Peering.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.peering.Peering.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.peering.Peering.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.peering.Peering.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.peering.Peering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.peering.Peering.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.peering.Peering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.peering.Peering.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.peering.Peering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.peering.Peering.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.peering.Peering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.peering.Peering.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.peering.Peering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.peering.Peering.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.peering.Peering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.peering.Peering.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.peering.Peering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.peering.Peering.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.peering.Peering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.peering.Peering.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.peering.Peering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.peering.Peering.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.peering.Peering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.peering.Peering.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMeta` <a name="resetMeta" id="@cdktf/provider-consul.peering.Peering.resetMeta"></a>

```typescript
public resetMeta(): void
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.peering.Peering.resetPartition"></a>

```typescript
public resetPartition(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.peering.Peering.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.peering.Peering.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.peering.Peering.isConstruct"></a>

```typescript
import { peering } from '@cdktf/provider-consul'

peering.Peering.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.peering.Peering.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.peering.Peering.isTerraformElement"></a>

```typescript
import { peering } from '@cdktf/provider-consul'

peering.Peering.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.peering.Peering.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-consul.peering.Peering.isTerraformResource"></a>

```typescript
import { peering } from '@cdktf/provider-consul'

peering.Peering.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.peering.Peering.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.peering.Peering.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.peering.Peering.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.property.deletedAt">deletedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.property.peerCaPems">peerCaPems</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.property.peerId">peerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.property.peerServerAddresses">peerServerAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.property.peerServerName">peerServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.property.metaInput">metaInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.property.partitionInput">partitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.property.peeringTokenInput">peeringTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.property.peerNameInput">peerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.property.meta">meta</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.property.partition">partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.property.peeringToken">peeringToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.Peering.property.peerName">peerName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.peering.Peering.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.peering.Peering.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.peering.Peering.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.peering.Peering.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.peering.Peering.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.peering.Peering.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.peering.Peering.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.peering.Peering.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.peering.Peering.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.peering.Peering.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.peering.Peering.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.peering.Peering.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.peering.Peering.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.peering.Peering.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `deletedAt`<sup>Required</sup> <a name="deletedAt" id="@cdktf/provider-consul.peering.Peering.property.deletedAt"></a>

```typescript
public readonly deletedAt: string;
```

- *Type:* string

---

##### `peerCaPems`<sup>Required</sup> <a name="peerCaPems" id="@cdktf/provider-consul.peering.Peering.property.peerCaPems"></a>

```typescript
public readonly peerCaPems: string[];
```

- *Type:* string[]

---

##### `peerId`<sup>Required</sup> <a name="peerId" id="@cdktf/provider-consul.peering.Peering.property.peerId"></a>

```typescript
public readonly peerId: string;
```

- *Type:* string

---

##### `peerServerAddresses`<sup>Required</sup> <a name="peerServerAddresses" id="@cdktf/provider-consul.peering.Peering.property.peerServerAddresses"></a>

```typescript
public readonly peerServerAddresses: string[];
```

- *Type:* string[]

---

##### `peerServerName`<sup>Required</sup> <a name="peerServerName" id="@cdktf/provider-consul.peering.Peering.property.peerServerName"></a>

```typescript
public readonly peerServerName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-consul.peering.Peering.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.peering.Peering.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metaInput`<sup>Optional</sup> <a name="metaInput" id="@cdktf/provider-consul.peering.Peering.property.metaInput"></a>

```typescript
public readonly metaInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.peering.Peering.property.partitionInput"></a>

```typescript
public readonly partitionInput: string;
```

- *Type:* string

---

##### `peeringTokenInput`<sup>Optional</sup> <a name="peeringTokenInput" id="@cdktf/provider-consul.peering.Peering.property.peeringTokenInput"></a>

```typescript
public readonly peeringTokenInput: string;
```

- *Type:* string

---

##### `peerNameInput`<sup>Optional</sup> <a name="peerNameInput" id="@cdktf/provider-consul.peering.Peering.property.peerNameInput"></a>

```typescript
public readonly peerNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.peering.Peering.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-consul.peering.Peering.property.meta"></a>

```typescript
public readonly meta: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.peering.Peering.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

---

##### `peeringToken`<sup>Required</sup> <a name="peeringToken" id="@cdktf/provider-consul.peering.Peering.property.peeringToken"></a>

```typescript
public readonly peeringToken: string;
```

- *Type:* string

---

##### `peerName`<sup>Required</sup> <a name="peerName" id="@cdktf/provider-consul.peering.Peering.property.peerName"></a>

```typescript
public readonly peerName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.peering.Peering.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.peering.Peering.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PeeringConfig <a name="PeeringConfig" id="@cdktf/provider-consul.peering.PeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.peering.PeeringConfig.Initializer"></a>

```typescript
import { peering } from '@cdktf/provider-consul'

const peeringConfig: peering.PeeringConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.peering.PeeringConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.PeeringConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.PeeringConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.PeeringConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.PeeringConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.PeeringConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.PeeringConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.peering.PeeringConfig.property.peeringToken">peeringToken</a></code> | <code>string</code> | The peering token fetched from the peer cluster. |
| <code><a href="#@cdktf/provider-consul.peering.PeeringConfig.property.peerName">peerName</a></code> | <code>string</code> | The name assigned to the peer cluster. |
| <code><a href="#@cdktf/provider-consul.peering.PeeringConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/peering#id Peering#id}. |
| <code><a href="#@cdktf/provider-consul.peering.PeeringConfig.property.meta">meta</a></code> | <code>{[ key: string ]: string}</code> | Specifies KV metadata to associate with the peering. |
| <code><a href="#@cdktf/provider-consul.peering.PeeringConfig.property.partition">partition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/peering#partition Peering#partition}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.peering.PeeringConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.peering.PeeringConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.peering.PeeringConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.peering.PeeringConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.peering.PeeringConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.peering.PeeringConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.peering.PeeringConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `peeringToken`<sup>Required</sup> <a name="peeringToken" id="@cdktf/provider-consul.peering.PeeringConfig.property.peeringToken"></a>

```typescript
public readonly peeringToken: string;
```

- *Type:* string

The peering token fetched from the peer cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/peering#peering_token Peering#peering_token}

---

##### `peerName`<sup>Required</sup> <a name="peerName" id="@cdktf/provider-consul.peering.PeeringConfig.property.peerName"></a>

```typescript
public readonly peerName: string;
```

- *Type:* string

The name assigned to the peer cluster.

The `peer_name` is used to reference the peer cluster in service discovery queries and configuration entries such as `service-intentions`. This field must be a valid DNS hostname label.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/peering#peer_name Peering#peer_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.peering.PeeringConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/peering#id Peering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-consul.peering.PeeringConfig.property.meta"></a>

```typescript
public readonly meta: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Specifies KV metadata to associate with the peering.

This parameter is not required and does not directly impact the cluster peering process.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/peering#meta Peering#meta}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.peering.PeeringConfig.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/peering#partition Peering#partition}.

---



